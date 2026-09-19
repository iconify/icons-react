import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ijmm-rb2y.css';
import '../../css/s/s9x15swgn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGxewEkxmK"><g class="ft5dv1b6b"><path class="ijmm-rb2y"/><path clip-rule="evenodd" class="s9x15swgn"/></g></mask></defs><path mask="url(#SVGxewEkxmK)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:tag-one",
	});
}

export default Component;
