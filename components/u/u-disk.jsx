import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/h/h3wkvdb4j.css';
import '../../css/i/ibr52rbry.css';
import '../../css/x/xl-ah-bqt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGyabUidUK"><g class="s9cl3zbei"><path class="h3wkvdb4j"/><path class="ibr52rbry"/><path class="xl-ah-bqt"/></g></mask></defs><path mask="url(#SVGyabUidUK)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:u-disk",
	});
}

export default Component;
