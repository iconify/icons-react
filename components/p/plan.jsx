import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/l/ljmw41jut.css';
import '../../css/t/tgf1jxbcb.css';
import '../../css/h/hz2zgmbpt.css';
import '../../css/h/hu_nuxbxh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGwLFWJeod"><g class="rohhhzb0l"><path class="ljmw41jut"/><path class="tgf1jxbcb"/><path class="hz2zgmbpt"/><path class="hu_nuxbxh"/></g></mask></defs><path mask="url(#SVGwLFWJeod)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:plan",
	});
}

export default Component;
