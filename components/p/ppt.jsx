import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/f/fzt9c0b2m.css';
import '../../css/m/md9y_u8eo.css';
import '../../css/z/z2_43e1dl.css';
import '../../css/y/y3_vjac4a.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGRBPVS6Hj"><g class="wwvp95byt"><path class="fzt9c0b2m"/><path clip-rule="evenodd" class="md9y_u8eo"/><path class="z2_43e1dl"/><path class="y3_vjac4a"/></g></mask></defs><path mask="url(#SVGRBPVS6Hj)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:ppt",
	});
}

export default Component;
