import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.r-rtuiooi {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 3.25q2.25 0 2.25 2.25V7q0 .413-.076.75h1.076q2.5 0 2.5 2.5v1q0 .564-.127 1H21.5q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146q0 .15-.058.288l-2.5 6q-.042.103-.113.189q-.071.085-.163.147t-.199.094q-.106.032-.217.032H5q-.111 0-.217-.032q-.107-.032-.199-.094t-.163-.147q-.071-.086-.113-.189l-2.5-6q-.058-.137-.058-.286q0-.15.056-.288q.057-.138.163-.243q.105-.106.243-.163t.288-.058h2.877q-.127-.436-.127-1v-1q0-2.5 2.5-2.5h2.076Q9.75 7.413 9.75 7V5.5q0-2.25 2.25-2.25");
}
</style><path class="r-rtuiooi"/>`,
		"fallback": "uix-solid:pin-cruise",
	});
}

export default Component;
