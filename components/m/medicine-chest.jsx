import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zfyl27hec.css';
import '../../css/v/v4b5s9tmh.css';
import '../../css/g/gv3y-d4kx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG92zufcFq"><g class="ft5dv1b6b"><rect class="zfyl27hec"/><path class="v4b5s9tmh"/><path class="gv3y-d4kx"/></g></mask></defs><path mask="url(#SVG92zufcFq)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:medicine-chest",
	});
}

export default Component;
