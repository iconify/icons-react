import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/u/uvh5rrbvb.css';
import '../../css/s/s-1nnbcne.css';
import '../../css/s/sjya5bbyx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG3YtBhbYq"><g class="rohhhzb0l"><rect class="uvh5rrbvb"/><path class="s-1nnbcne"/><path class="sjya5bbyx"/></g></mask></defs><path mask="url(#SVG3YtBhbYq)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:mouse-one",
	});
}

export default Component;
