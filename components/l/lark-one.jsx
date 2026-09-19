import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xmhe9tbvl.css';
import '../../css/o/opn9e9byw.css';
import '../../css/e/ej-u0gdsv.css';
import '../../css/v/v0m5xdb6q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="ipSLarkOne0"><g class="ft5dv1b6b"><g clip-path="url(#ipSLarkOne1)"><path class="xmhe9tbvl"/><path clip-rule="evenodd" class="opn9e9byw"/><path class="ej-u0gdsv"/></g><defs><clipPath id="ipSLarkOne1"><path class="v0m5xdb6q"/></clipPath></defs></g></mask><path mask="url(#ipSLarkOne0)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:lark-one",
	});
}

export default Component;
