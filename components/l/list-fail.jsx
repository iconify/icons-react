import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/c/cd0y8fbhg.css';
import '../../css/b/bst2n4bqq.css';
import '../../css/k/ko8634b1x.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGd209Vddg"><g class="aql7dnt-u"><path class="cd0y8fbhg"/><circle class="bst2n4bqq"/><circle class="ko8634b1x"/></g></mask></defs><path mask="url(#SVGd209Vddg)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:list-fail",
	});
}

export default Component;
