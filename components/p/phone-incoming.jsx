import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/a/afq7mjurd.css';
import '../../css/e/eiol0ep0o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGHp2ribKM"><g class="v3_i3wktz"><path class="afq7mjurd"/><path class="eiol0ep0o"/></g></mask></defs><path mask="url(#SVGHp2ribKM)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:phone-incoming",
	});
}

export default Component;
