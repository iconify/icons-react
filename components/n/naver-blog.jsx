import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gw-nor27e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.075 26.366c0-4.144 3.553-7.505 7.935-7.505s7.935 3.36 7.935 7.505v4.88c0 4.144-3.553 7.504-7.935 7.504s-7.935-3.36-7.935-7.505m0 7.506V8.73M36.925 5v38");
}
</style><path class="gw-nor27e"/>`,
		"fallback": "arcticons:naver-blog",
	});
}

export default Component;
