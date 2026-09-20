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
		"content": `<style>.qdskqs4de {
  fill: currentColor;
  d: path("M19.077 11.45q-.173-2.829-2.153-4.809T12.116 4.49v-1q1.625.077 3.04.722q1.417.645 2.485 1.713t1.714 2.485q.645 1.416.722 3.041zm-4 0q-.173-1.154-.99-1.98t-1.971-.981v-1q1.575.153 2.681 1.27t1.28 2.691zM19.2 20q-2.702 0-5.418-1.244t-5.005-3.533q-2.27-2.289-3.523-5.021Q4 7.469 4 4.8V4h4.439l.848 4.083l-2.696 2.51q.684 1.186 1.417 2.167t1.527 1.769q.802.84 1.808 1.57t2.296 1.44l2.611-2.708l3.75.756V20z");
}
</style><path class="qdskqs4de"/>`,
		"fallback": "material-symbols-light:phone-in-talk-sharp",
	});
}

export default Component;
