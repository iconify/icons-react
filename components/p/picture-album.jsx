import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/u/ulau1-bvx.css';
import '../../css/y/y6d2unfse.css';
import '../../css/h/hpckf8hlz.css';
import '../../css/e/em19qbc_z.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGXf2kodIZ"><g class="ufeehvblu"><rect class="ulau1-bvx"/><path class="y6d2unfse"/><path class="hpckf8hlz"/><path class="em19qbc_z"/></g></mask></defs><path mask="url(#SVGXf2kodIZ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:picture-album",
	});
}

export default Component;
