import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cyw334h8y {
  fill: currentColor;
  d: path("m12.195 12.902l1.951 1.952a.5.5 0 0 0 .708-.708l-13-13a.5.5 0 1 0-.708.708l1.739 1.738A2.5 2.5 0 0 0 2 5.5v5A2.5 2.5 0 0 0 4.5 13h7q.362-.001.695-.098M8.699 9.406l-1.712 1.047a.32.32 0 0 1-.487-.274V7.207zm1.547-1.867a.54.54 0 0 1 .171.757l3.32 3.32A2.5 2.5 0 0 0 14 10.5v-5A2.5 2.5 0 0 0 11.5 3H5.121L8.74 6.619z");
}
</style><path class="cyw334h8y"/>`,
		"fallback": "fluent:video-clip-off-16-filled",
	});
}

export default Component;
