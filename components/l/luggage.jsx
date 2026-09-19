import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/p/pbrqwuz4v.css';
import '../../css/j/jpcsqgbaq.css';
import '../../css/i/ibt7y1cam.css';
import '../../css/s/sd3ztxbbo.css';
import '../../css/t/tazx-gb3y.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGnzYl7dOB"><g class="gopnm44um"><rect class="pbrqwuz4v"/><path class="jpcsqgbaq"/><path class="ibt7y1cam"/><path class="sd3ztxbbo"/><path class="tazx-gb3y"/></g></mask></defs><path mask="url(#SVGnzYl7dOB)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:luggage",
	});
}

export default Component;
