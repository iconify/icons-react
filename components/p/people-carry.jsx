import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7-sbloho.css';
import '../../css/l/lfpx5tcva.css';
import '../../css/s/s3btd85nz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z7-sbloho"/><path class="lfpx5tcva"/><path class="s3btd85nz"/>`,
		"fallback": "pixel:people-carry",
	});
}

export default Component;
