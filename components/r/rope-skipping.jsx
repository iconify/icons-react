import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vs65shbqk.css';
import '../../css/v/vctpcju6f.css';
import '../../css/m/mz_zr_b4f.css';
import '../../css/n/n3lb0cchf.css';
import '../../css/g/g194ni51h.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGXnkwCbKv"><g class="ft5dv1b6b"><path class="vs65shbqk"/><path class="vctpcju6f"/><path class="mz_zr_b4f"/><path class="n3lb0cchf"/><path class="g194ni51h"/></g></mask></defs><path mask="url(#SVGXnkwCbKv)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:rope-skipping",
	});
}

export default Component;
