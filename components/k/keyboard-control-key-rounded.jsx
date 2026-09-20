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
		"content": `<style>.go__qachx {
  fill: currentColor;
  d: path("M12 7.825L7.1 12.7q-.275.275-.687.288T5.7 12.7q-.275-.275-.275-.7t.275-.7l5.6-5.6q.3-.3.7-.3t.7.3l5.6 5.6q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275z");
}
</style><path class="go__qachx"/>`,
		"fallback": "material-symbols:keyboard-control-key-rounded",
	});
}

export default Component;
