import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/c/co42hnb9v.css';
import '../../css/a/avoui1obq.css';
import '../../css/o/o_vxr_b7e.css';
import '../../css/o/o0ootkc7b.css';
import '../../css/z/zltnhnhsj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGrxR7VccF"><g class="s9cl3zbei"><path class="co42hnb9v"/><path class="avoui1obq"/><path class="o_vxr_b7e"/><path class="o0ootkc7b"/><path class="zltnhnhsj"/></g></mask></defs><path mask="url(#SVGrxR7VccF)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:lip-tattoo",
	});
}

export default Component;
