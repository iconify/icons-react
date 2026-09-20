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
		"content": `<style>.fpj9trwcd {
  fill: currentColor;
  d: path("M7.654 9.116v-1H20v1zm0 3.384v-1H20v1zm0 3.385v-1H20v1zM4.616 9.23q-.262 0-.439-.183Q4 8.866 4 8.596q0-.253.177-.424Q4.354 8 4.616 8q.261 0 .438.172q.177.17.177.424q0 .27-.177.452q-.177.183-.439.183m0 3.365q-.261 0-.438-.171T4 12q0-.29.177-.462t.439-.173t.438.172t.177.463q0 .253-.177.425t-.439.171m0 3.404q-.261 0-.438-.182Q4 15.635 4 15.366q0-.254.177-.425q.177-.172.439-.172q.261 0 .438.172t.177.425q0 .269-.177.452q-.177.182-.439.182");
}
</style><path class="fpj9trwcd"/>`,
		"fallback": "material-symbols-light:list-outline",
	});
}

export default Component;
