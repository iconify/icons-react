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
		"content": `<style>.trr-39bdn {
  fill: currentColor;
  d: path("M4 17.199v-3.206q0-.341.232-.571t.576-.23H10q.343 0 .576.23t.232.572V17.2q0 .34-.232.57T10 18H4.808q-.343 0-.576-.23T4 17.199m9.192 0v-3.206q0-.341.233-.571q.232-.23.575-.23h5.192q.344 0 .576.23t.232.572V17.2q0 .34-.232.57t-.576.23H14q-.343 0-.575-.23q-.233-.23-.233-.571M4 10.006V6.8q0-.34.232-.57T4.808 6H10q.343 0 .576.23t.232.571v3.207q0 .34-.232.57q-.233.23-.576.23H4.808q-.343 0-.576-.23T4 10.005m9.192 0V6.8q0-.34.233-.57T14 6h5.192q.344 0 .576.23t.232.571v3.207q0 .34-.232.57q-.233.23-.576.23H14q-.343 0-.575-.23t-.233-.572");
}
</style><path class="trr-39bdn"/>`,
		"fallback": "material-symbols-light:tile-small-rounded",
	});
}

export default Component;
