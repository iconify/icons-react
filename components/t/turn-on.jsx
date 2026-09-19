import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dlrjxpbzv.css';
import '../../css/y/y5f2femjw.css';
import '../../css/j/jbe-vzczt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGY07hicwO"><g class="dlrjxpbzv"><path class="y5f2femjw"/><path class="jbe-vzczt"/></g></mask></defs><path mask="url(#SVGY07hicwO)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:turn-on",
	});
}

export default Component;
