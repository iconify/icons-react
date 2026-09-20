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
		"content": `<style>.rf75ssbkb {
  fill: currentColor;
  d: path("M15.6 17L4.7 6.1q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275L17 15.6V10q0-.425.288-.712T18 9t.713.288T19 10v8q0 .425-.288.713T18 19h-8q-.425 0-.712-.288T9 18t.288-.712T10 17z");
}
</style><path class="rf75ssbkb"/>`,
		"fallback": "material-symbols:south-east-rounded",
	});
}

export default Component;
