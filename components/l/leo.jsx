import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/y/yr26ddb1h.css';
import '../../css/a/agrs6obul.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGHH3GxFLl"><g class="rohhhzb0l"><circle class="yr26ddb1h"/><path class="agrs6obul"/></g></mask></defs><path mask="url(#SVGHH3GxFLl)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:leo",
	});
}

export default Component;
