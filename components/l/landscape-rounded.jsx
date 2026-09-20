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
		"content": `<style>.s2aunw9ze {
  fill: currentColor;
  d: path("m3.873 15.708l2.577-3.46q.122-.161.295-.242q.172-.081.355-.081t.347.08q.165.082.295.243l2.516 3.352q.152.2.354.3t.455.1q.633 0 .909-.562t-.099-1.063l-1.043-1.39q-.161-.224-.161-.488t.162-.482l2.615-3.498q.122-.161.295-.242q.172-.08.355-.08t.347.08t.295.242l5.385 7.19q.298.405.077.849t-.723.444H4.529q-.52 0-.737-.444t.081-.848");
}
</style><path class="s2aunw9ze"/>`,
		"fallback": "material-symbols-light:landscape-rounded",
	});
}

export default Component;
