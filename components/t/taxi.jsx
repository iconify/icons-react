import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eebbqibke.css';
import '../../css/i/i7z607m3y.css';
import '../../css/s/s_-e5vbjx.css';
import '../../css/v/vi4-tbc9j.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGvE0ncbKk"><g class="ft5dv1b6b"><path class="eebbqibke"/><path class="i7z607m3y"/><path clip-rule="evenodd" class="s_-e5vbjx"/><path class="vi4-tbc9j"/></g></mask></defs><path mask="url(#SVGvE0ncbKk)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:taxi",
	});
}

export default Component;
