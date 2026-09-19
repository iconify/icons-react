import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/d/d4uzuxbeh.css';
import '../../css/e/e6fsqxbrk.css';
import '../../css/d/d4nb9cc3g.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGMaCf9bZC"><g class="s9cl3zbei"><path clip-rule="evenodd" class="d4uzuxbeh"/><path class="e6fsqxbrk"/><path class="d4nb9cc3g"/></g></mask></defs><path mask="url(#SVGMaCf9bZC)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:neural",
	});
}

export default Component;
