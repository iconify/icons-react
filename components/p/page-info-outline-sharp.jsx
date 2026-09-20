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
		"content": `<style>.ltb774bxt {
  fill: currentColor;
  d: path("M15.472 18.201q-.856-.857-.856-2.085q0-1.23.856-2.086q.857-.857 2.086-.857t2.085.857t.857 2.086t-.857 2.085t-2.085.857q-1.23 0-2.086-.857m3.458-.711q.57-.569.57-1.373q0-.803-.568-1.374t-1.372-.57t-1.374.568q-.57.569-.57 1.373q0 .803.568 1.374t1.372.57t1.374-.568M5 16.616v-1h7.23v1zM4.357 9.97Q3.5 9.113 3.5 7.884T4.357 5.8t2.085-.857q1.23 0 2.086.857q.857.857.857 2.085q0 1.23-.857 2.086q-.857.857-2.086.857T4.357 9.97m3.458-.711q.57-.569.57-1.373q0-.803-.569-1.374t-1.372-.57t-1.374.568t-.57 1.373t.568 1.374t1.372.57q.804 0 1.374-.568m3.955-.875v-1H19v1zm-5.327-.5");
}
</style><path class="ltb774bxt"/>`,
		"fallback": "material-symbols-light:page-info-outline-sharp",
	});
}

export default Component;
