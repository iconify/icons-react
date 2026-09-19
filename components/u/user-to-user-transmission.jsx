import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/q/qdbr9_1py.css';
import '../../css/v/vh156zb_f.css';
import '../../css/a/au67ybcgw.css';
import '../../css/v/v-y43hbiv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGpJGKkeEd"><g class="v3_i3wktz"><path class="qdbr9_1py"/><path class="vh156zb_f"/><path class="au67ybcgw"/><path class="v-y43hbiv"/></g></mask></defs><path mask="url(#SVGpJGKkeEd)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:user-to-user-transmission",
	});
}

export default Component;
