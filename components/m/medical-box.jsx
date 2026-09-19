import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/g/g93f848nk.css';
import '../../css/k/k-n-l4bih.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGzGXkVSWQ"><g class="rohhhzb0l"><path class="g93f848nk"/><path class="k-n-l4bih"/></g></mask></defs><path mask="url(#SVGzGXkVSWQ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:medical-box",
	});
}

export default Component;
