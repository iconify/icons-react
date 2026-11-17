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
		"content": `<style>.u65gtgdyg {
  fill: currentColor;
  d: path("M3 2h18a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-3v3a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m7.652 13.092c.299.411.473.898.473 1.408c0 1.089-.746 1.928-1.678 2.394c-.204.103-.572.338-.572.606s.368.503.572.606a1 1 0 1 1-.894 1.788c-.469-.234-.895-.559-1.205-.986a2.4 2.4 0 0 1-.473-1.408c0-1.089.746-1.928 1.678-2.394c.204-.103.572-.338.572-.606s-.368-.503-.572-.606a.999.999 0 1 1 .894-1.788c.469.234.895.559 1.205.986m6 0c.299.411.473.898.473 1.408c0 1.089-.746 1.928-1.678 2.394c-.204.103-.572.338-.572.606s.368.503.572.606a1 1 0 1 1-.894 1.788c-.469-.234-.895-.559-1.205-.986a2.4 2.4 0 0 1-.473-1.408c0-1.089.746-1.928 1.678-2.394c.204-.103.572-.338.572-.606s-.368-.503-.572-.606a1 1 0 1 1 .894-1.788c.469.234.895.559 1.205.986");
}
</style><path class="u65gtgdyg"/>`,
		"fallback": "coolicons:smoke-detector-fill-sharp",
	});
}

export default Component;
