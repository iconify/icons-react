import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eknmiedkj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGaJDgL3dK"><path class="eknmiedkj"/></mask></defs><path mask="url(#SVGaJDgL3dK)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:phone-telephone",
	});
}

export default Component;
