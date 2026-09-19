import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/n/n6ohdwn_k.css';
import '../../css/r/rk0ci9b5a.css';
import '../../css/z/zgipi4gzm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGJY7vRXYX"><g class="v3_i3wktz"><path class="n6ohdwn_k"/><path class="rk0ci9b5a"/><path class="zgipi4gzm"/></g></mask></defs><path mask="url(#SVGJY7vRXYX)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:mind-mapping",
	});
}

export default Component;
