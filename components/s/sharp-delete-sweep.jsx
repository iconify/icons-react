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
		"content": `<style>.nbg4ns3dh {
  fill: currentColor;
  d: path("M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 20h10V8H3zM14 5h-3l-1-1H6L5 5H2v2h12z");
}
</style><path class="nbg4ns3dh"/>`,
		"fallback": "ic:sharp-delete-sweep",
	});
}

export default Component;
