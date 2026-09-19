import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/v/vae5tl_vn.css';
import '../../css/s/sz9qk5b4w.css';
import '../../css/u/u0z5bpiqr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGMepUW2CJ"><g class="rohhhzb0l"><path class="vae5tl_vn"/><circle class="sz9qk5b4w"/><path class="u0z5bpiqr"/></g></mask></defs><path mask="url(#SVGMepUW2CJ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:timed-mail",
	});
}

export default Component;
