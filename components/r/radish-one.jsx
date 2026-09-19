import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/uiuyxo1yk.css';
import '../../css/c/czte7tiqy.css';
import '../../css/k/km64vnbvm.css';
import '../../css/o/oskonbbeh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG5bPLCsmT"><g class="aql7dnt-u"><path class="uiuyxo1yk"/><path class="czte7tiqy"/><path class="km64vnbvm"/><path class="oskonbbeh"/></g></mask></defs><path mask="url(#SVG5bPLCsmT)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:radish-one",
	});
}

export default Component;
