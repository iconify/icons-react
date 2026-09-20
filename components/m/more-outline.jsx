import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ol7wj8slf {
  fill: currentColor;
  d: path("M9 20q-.475 0-.9-.213t-.7-.587L2 12l5.4-7.2q.275-.375.7-.587T9 4h11q.825 0 1.413.587T22 6v12q0 .825-.587 1.413T20 20zm-4.5-8L9 18h11V6H9zm6.213.713Q11 12.425 11 12t-.288-.712T10 11t-.712.288T9 12t.288.713T10 13t.713-.288m3.5 0q.287-.287.287-.712t-.288-.712T13.5 11t-.712.288T12.5 12t.288.713t.712.287t.713-.288m3.5 0Q18 12.426 18 12t-.288-.712T17 11t-.712.288T16 12t.288.713T17 13t.713-.288M14.5 12");
}
</style><path class="ol7wj8slf"/>`,
		"fallback": "material-symbols:more-outline",
	});
}

export default Component;
