import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i2my6yayu.css';
import '../../css/q/q_fvx4bhk.css';
import '../../css/w/wbd5s4b1z.css';
import '../../css/n/nvpffvb3a.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGwNhiqepp"><g class="ft5dv1b6b"><rect class="i2my6yayu"/><rect class="q_fvx4bhk"/><path class="wbd5s4b1z"/><path class="nvpffvb3a"/></g></mask></defs><path mask="url(#SVGwNhiqepp)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:perfume",
	});
}

export default Component;
