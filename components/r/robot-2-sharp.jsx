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
		"content": `<style>.uyxdsljqq {
  fill: currentColor;
  d: path("M5 20v-5.654h14V20zm4.289-7.423q-1.78 0-3.035-1.255Q5 10.068 5 8.29t1.254-3.035T9.29 4h5.423q1.78 0 3.034 1.254T19 8.29t-1.254 3.034t-3.034 1.254zm.52-3.768q.21-.21.21-.52t-.21-.52t-.52-.211t-.52.21t-.211.52t.21.52t.52.211t.52-.21m5.424 0q.21-.21.21-.52t-.21-.52t-.52-.211t-.52.21t-.211.52t.21.52t.52.211t.52-.21");
}
</style><path class="uyxdsljqq"/>`,
		"fallback": "material-symbols-light:robot-2-sharp",
	});
}

export default Component;
