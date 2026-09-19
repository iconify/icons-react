import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp649actv.css';
import '../../css/t/twafu6bzl.css';
import '../../css/s/swd51fzfc.css';
import '../../css/j/jbrvtvlbz.css';
import '../../css/g/gb6m21box.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gp649actv"/><path class="twafu6bzl"/><path class="swd51fzfc"/><path class="jbrvtvlbz"/><path class="gb6m21box"/>`,
		"fallback": "flag:sc-4x3",
	});
}

export default Component;
