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
		"content": `<style>.uiheizesp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.239 41.164L5.127 9.848a.945.945 0 0 1 .815-1.42l36.113-.063a.945.945 0 0 1 .82 1.416l-18.002 31.38a.942.942 0 0 1-1.633.003Z");
}

.yxqjyfhtk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m28.369 22.074l-8.742.083l4.3-7.632Zm-4.441-7.557L20.463 8.47m-.823 13.685l-3.638 6.307m12.372-6.384h7.16");
}
</style><path class="uiheizesp"/><path class="yxqjyfhtk"/>`,
		"fallback": "arcticons:sicoob",
	});
}

export default Component;
