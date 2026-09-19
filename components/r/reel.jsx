import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/b/bnk-_vbtx.css';
import '../../css/d/d7ovo-w3p.css';
import '../../css/w/w9x8kzbyj.css';
import '../../css/v/v1_9a1bkq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGrQ0tDbpJ"><g class="rohhhzb0l"><path class="bnk-_vbtx"/><path class="d7ovo-w3p"/><path class="w9x8kzbyj"/><path class="v1_9a1bkq"/></g></mask></defs><path mask="url(#SVGrQ0tDbpJ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:reel",
	});
}

export default Component;
