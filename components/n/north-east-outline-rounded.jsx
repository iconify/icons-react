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
		"content": `<style>.vlij0w_nl {
  fill: currentColor;
  d: path("M17 8.4L6.1 19.3q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7L15.6 7H10q-.425 0-.712-.288T9 6t.288-.712T10 5h8q.425 0 .713.288T19 6v8q0 .425-.288.713T18 15t-.712-.288T17 14z");
}
</style><path class="vlij0w_nl"/>`,
		"fallback": "material-symbols:north-east-outline-rounded",
	});
}

export default Component;
