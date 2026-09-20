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
		"content": `<style>.kng716jqm {
  fill: currentColor;
  d: path("M12 17.5q-.425 0-.712-.288T11 16.5V13H3q-.425 0-.712-.288T2 12t.288-.712T3 11h8V7.5q0-.425.288-.712T12 6.5h9q.425 0 .713.288T22 7.5v9q0 .425-.288.713T21 17.5z");
}
</style><path class="kng716jqm"/>`,
		"fallback": "material-symbols:line-end-square-rounded",
	});
}

export default Component;
