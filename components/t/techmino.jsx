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
		"content": `<style>.rae0znb6j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m9.112 6.325l-1.769-.474L4.5 16.462l1.769.474m9.711-8.771l1.768.474l-2.843 10.611l-1.769-.474m10.852-8.465l-1.769-.474l-2.843 10.611l1.768.474m9.711-8.771l1.769.474l-2.843 10.611l-1.769-.474m-8.024 2.476l-1.769-.474l-2.843 10.611l1.769.474m9.711-8.771l1.768.474l-2.843 10.611l-1.769-.474m10.852-8.465l-1.769-.474l-2.843 10.611l1.768.474m9.711-8.771l1.769.474l-2.843 10.611l-1.769-.474");
}
</style><path class="rae0znb6j"/>`,
		"fallback": "arcticons:techmino",
	});
}

export default Component;
