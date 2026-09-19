import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqznn1ydc.css';
import '../../css/u/ui61hbb4y.css';
import '../../css/u/ugvles_jq.css';
import '../../css/d/dmdwoux-t.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGJ1SrHbrZ"><g class="wqznn1ydc"><path class="ui61hbb4y"/><path class="ugvles_jq"/><path class="dmdwoux-t"/></g></mask></defs><path mask="url(#SVGJ1SrHbrZ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:rollerskates",
	});
}

export default Component;
