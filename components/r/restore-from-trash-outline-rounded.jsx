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
		"content": `<style>.a5w04sbuc {
  fill: currentColor;
  d: path("M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5t.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM7 6v13zm4 5.85V15q0 .425.288.713T12 16t.713-.288T13 15v-3.15l.9.875q.275.275.688.275t.712-.3q.275-.275.275-.7t-.275-.7l-2.6-2.6q-.3-.3-.7-.3t-.7.3l-2.6 2.6q-.275.275-.287.688t.287.712q.275.275.688.288t.712-.263z");
}
</style><path class="a5w04sbuc"/>`,
		"fallback": "material-symbols:restore-from-trash-outline-rounded",
	});
}

export default Component;
