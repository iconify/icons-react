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
		"content": `<style>.chu61h8mr {
  fill: currentColor;
  d: path("M12 5h8a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2M8.707 8.707L5.414 12l3.293 3.293a.999.999 0 1 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a.999.999 0 1 1 1.414 1.414M12 9h8a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2m0 4h8a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2m0 4h8a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2");
}
</style><path class="chu61h8mr"/>`,
		"fallback": "coolicons:outdent-fill-round",
	});
}

export default Component;
