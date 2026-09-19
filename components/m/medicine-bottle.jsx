import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/e/ei-jx0bkl.css';
import '../../css/f/fgw2kbbow.css';
import '../../css/c/c_cj3-b6o.css';
import '../../css/n/nowu8bc5a.css';
import '../../css/i/i2cggjtvu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGkG7ZUbgQ"><g class="s9cl3zbei"><path class="ei-jx0bkl"/><path class="fgw2kbbow"/><path class="c_cj3-b6o"/><path class="nowu8bc5a"/><path class="i2cggjtvu"/></g></mask></defs><path mask="url(#SVGkG7ZUbgQ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:medicine-bottle",
	});
}

export default Component;
