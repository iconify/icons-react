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
		"content": `<style>.enl9d6bdm {
  fill: currentColor;
  d: path("M6.293 15.832q.323-.323.323-.794q0-.47-.323-.793q-.322-.322-.793-.322t-.793.322q-.323.322-.323.793t.323.794t.793.322t.793-.322M3.385 20v-.461l1.5-1q-1.2 0-2.043-.843Q2 16.854 2 15.654V6.539Q2 4.944 3.636 4.24q1.638-.7 5.364-.7q1.287 0 2.317.077q1.031.078 1.858.246l-.04 1.23l-4.462 1.985H3v4.462h5.616v2.788h2.155L9.714 20zm8.557 1L14.32 8.285L12 9.311v2.63h-1V8.646L14.935 6.9q.59-.261 1.11-.13t.828.653l.673 1.158q.638 1.165 1.45 1.84q.81.675 2.004.79v1q-1.323-.115-2.337-.821t-1.836-2.063l-.715 3.596l1.811 1.866V21h-1v-5.173l-2.33-2.442L12.984 21zM17 5.52q-.613 0-1.047-.435q-.434-.433-.434-1.047t.434-1.047T17 2.558t1.047.433t.434 1.047t-.434 1.047q-.433.434-1.047.434");
}
</style><path class="enl9d6bdm"/>`,
		"fallback": "material-symbols-light:subway-walk",
	});
}

export default Component;
