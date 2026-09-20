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
		"content": `<style>.jvqucgbxk {
  fill: currentColor;
  d: path("m17.77 9.462l-.72-.708l2.1-2.1h-5.88v-1h5.88l-2.088-2.089l.707-.719l3.308 3.32zM19.2 20q-2.702 0-5.418-1.244t-5.005-3.533q-2.27-2.289-3.523-5.021Q4 7.469 4 4.8V4h4.439l.848 4.083l-2.696 2.51q.684 1.186 1.417 2.167t1.527 1.769q.802.84 1.808 1.57t2.296 1.44l2.611-2.708l3.75.756V20z");
}
</style><path class="jvqucgbxk"/>`,
		"fallback": "material-symbols-light:phone-forwarded-sharp",
	});
}

export default Component;
