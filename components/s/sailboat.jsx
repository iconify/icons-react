import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqznn1ydc.css';
import '../../css/h/hs15a5npu.css';
import '../../css/p/p-_fhib7c.css';
import '../../css/f/fi_rz_b5r.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGBOtD7n7y"><g class="wqznn1ydc"><path class="hs15a5npu"/><path class="p-_fhib7c"/><path class="fi_rz_b5r"/></g></mask></defs><path mask="url(#SVGBOtD7n7y)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:sailboat",
	});
}

export default Component;
