import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/c/cdrd5ybzk.css';
import '../../css/b/bypdwpb_f.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGshJT0cSA"><g class="v3_i3wktz"><path class="cdrd5ybzk"/><path class="bypdwpb_f"/></g></mask></defs><path mask="url(#SVGshJT0cSA)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:notebook-one",
	});
}

export default Component;
