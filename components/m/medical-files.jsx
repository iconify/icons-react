import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/z/zo7kwhb-r.css';
import '../../css/b/b1zadi_uw.css';
import '../../css/e/ehh3wwbgj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGEJ6rvqIs"><g class="rohhhzb0l"><path class="zo7kwhb-r"/><path class="b1zadi_uw"/><path class="ehh3wwbgj"/></g></mask></defs><path mask="url(#SVGEJ6rvqIs)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:medical-files",
	});
}

export default Component;
